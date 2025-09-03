import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/athena/', // GitHub Pages repo name
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        createRoom: resolve(__dirname, 'create-room.html'),
        roleSelect: resolve(__dirname, 'story/role-select.html'),
        finaliseRoles: resolve(__dirname, 'story/finalise-roles.html'),
        roomLobby: resolve(__dirname, 'room-lobby.html'),
        roomSelect: resolve(__dirname, 'room-select.html'),
        situationRoom: resolve(__dirname, 'story/rooms/situation-room.html'),
        commandCentre: resolve(__dirname, 'story/rooms/command-centre.html'),
        developerHub: resolve(__dirname, 'story/rooms/developer-hub.html'),
        researchLab: resolve(__dirname, 'story/rooms/research-lab.html'),
        serverRoom: resolve(__dirname, 'story/rooms/server-room.html'),
      },
      output: {
        // Force single bundle to avoid import path issues
        manualChunks: () => 'main',
        chunkFileNames: 'assets/[name].js',
        entryFileNames: 'assets/[name].js',
      },
    },
  },
});