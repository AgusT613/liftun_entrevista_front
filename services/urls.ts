const endpoint = 'api/environment-action/'
const LOCAL_API_REST_URL = `http://localhost:8000/${endpoint}`
const RENDER_API_REST_URL = `https://mysite-np2b.onrender.com/${endpoint}`
export const ENVIRONMENT_ACTION_API = process.env.NODE_ENV === 'development' ? LOCAL_API_REST_URL : RENDER_API_REST_URL
