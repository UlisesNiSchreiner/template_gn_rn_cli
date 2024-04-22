import axios from "axios";
import { Platform, Request } from 'test_fluxjs'
import { HttpClient } from 'test_fluxjs';

const getPlatform = () =>  Platform.MOBILE_ANDROID;
const headers = {
  'Content-Type': 'application/json',
  'client': getPlatform(),
}

export default class HttpClientImp extends HttpClient {
baseUrl: string

constructor (baseUrl: string) {
  super()
  this.baseUrl = baseUrl
}

  async post(request: Request): Promise<string> {
    console.log("fetch post")
    const response = await axios.post(this.baseUrl, request, { headers } );

    return JSON.stringify(response.data);
  }

  async put(request: Request): Promise<string> {
    console.log("fetch put")
    const response = await axios.put(this.baseUrl, request, { headers } );
    //console.log("finsih put response ->:", response)
    
    return JSON.stringify(response.data);
  }
}
