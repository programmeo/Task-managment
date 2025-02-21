const express = require("express");
const server = express();
const port = 3000;
const appRoute = require('./src/app')
const mongoDb = require('./src/config/db')
const dotenv = require('dotenv');


dotenv.config(); //add local variables
mongoDb(); //connect to database

server.use('/', appRoute)

server.all("/*", (req, res) => {
  res.send(`
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Backend Service</title><script src="https://cdn.tailwindcss.com"></script></head><body class="bg-gray-900 min-h-screen flex items-center justify-center"><div class="text-center space-y-8"><h1 class="text-5xl font-bold text-white animate-pulse">Task Management API</h1><div class="max-w-2xl mx-auto space-y-4"><p class="text-gray-400 text-xl transform transition-all hover:scale-105 duration-300">Powerful Backend Services Running at Your Command</p><div class="flex items-center justify-center space-x-2 my-8"><div class="w-3 h-3 bg-green-500 rounded-full animate-bounce"></div><span class="text-green-500">Service Active</span></div><div class="grid grid-cols-1 gap-4 text-gray-400"><div class="p-4 rounded-lg border border-gray-800 transform transition-all hover:-translate-y-1 hover:border-blue-500 duration-300">RESTful API Endpoints</div><div class="p-4 rounded-lg border border-gray-800 transform transition-all hover:-translate-y-1 hover:border-blue-500 duration-300">Secure Authentication</div><div class="p-4 rounded-lg border border-gray-800 transform transition-all hover:-translate-y-1 hover:border-blue-500 duration-300">Task Management System</div></div><p class="text-gray-600 mt-8 animate-pulse">API Version 1.0</p></div></div><div class="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20"><div class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div><div class="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div><div class="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div></div><style>@keyframes blob{0%{transform:translate(0,0) scale(1)}33%{transform:translate(30px,-50px) scale(1.1)}66%{transform:translate(-20px,20px) scale(.9)}100%{transform:translate(0,0) scale(1)}}.animate-blob{animation:blob 7s infinite}.animation-delay-2000{animation-delay:2s}.animation-delay-4000{animation-delay:4s}</style></body></html>`);
});

const url = "192.168.1.36"
server.listen(port, () => {
  console.log(`Example server listening on port http://localhost:${port}`);
});
