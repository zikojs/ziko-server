// import { join } from 'path';
// import { pathToFileURL } from 'url';
// const ziko_config_path = pathToFileURL(join(process.cwd(), 'ziko.config.js')).href;

const mode = process.env.NODE_ENV === "production" ? 'prod' : 'dev'

export function SetupMiddleware(req, res, next) {
    const protocol = req.protocol || (req.connection.encrypted ? 'https' : 'http');
    const host = req.headers.host;
    const origin = `${protocol}://${host}`
    globalThis.Ziko = {
      engine: 'zikojs',
      mode,
      url : req.url,
      protocol,
      host,
      origin,
      locals: {},   
      set(key, value) { this.locals[key] = value; },
      get(key) { return this.locals[key]; }
    };
  Object.assign(req, {Ziko})
  next();
}