/**
 * Created by Mor-Men on 4/29/2017.
 */

export default function getBaseUrl() {
    const dev = window.location.hostname === 'localhost';
    return dev ? 'http://localhost:3001/' : '/';
  }
