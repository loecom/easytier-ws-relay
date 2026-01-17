// Cloudflare Worker entry for EasyTier WebSocket relay backed by Durable Object
// Module syntax is required for Durable Objects.
import { RelayRoom } from './worker/relay_room';

export { RelayRoom };

// ESA 入口点格式  
export default {  
  async fetch(request, env) {  
    // 保持原有的路由逻辑  
    const url = new URL(request.url);  
    const { pathname, searchParams } = url;  
      
    if (pathname === '/healthz') {  
      return new Response('ok', { status: 200 });  
    }  
      
    // WebSocket 升级处理需要适配 ESA 的 WebSocket API  
    const wsPath = '/' + env.WS_PATH || '/ws';  
    if (pathname === wsPath || pathname === wsPath + '/') {  
      // ESA WebSocket 处理逻辑  
    }  
  }  
};
