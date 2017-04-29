/**
 * Created by Mor-Men on 4/29/2017.
 */
import 'whatwg-fetch';
import getBaseUrl from './base_url';

const baseUrl = getBaseUrl();

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

export function getProducts() {
  return get('products.json');
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); //eslint-disable-line no-console
}
