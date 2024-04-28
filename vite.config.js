import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/project_3D_developer_portfolio/',
  plugins: [react()],
  server: {
    host: true,
  },
});
