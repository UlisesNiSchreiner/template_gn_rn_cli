import { ClientSessionStorage } from 'test_fluxjs'
import EncryptedStorage from 'react-native-encrypted-storage';

export default class ClientSessionStorageImp extends ClientSessionStorage {
  constructor(sessionStoreKey: string) {
    super(sessionStoreKey)
  }

  async putSessionId(sessionId: string): Promise<void> {
    //localStorage.setItem("sessionID", sessionId);
    //console.log(sessionId)
    await EncryptedStorage.setItem(this.sessionStorageKey, sessionId);
  }

  async getSessionId(): Promise<string> {
    //const sessionID = localStorage.getItem("sessionID");
    //return sessionID !== null ? sessionID.toString() : "";
    //return "1709781205073077435"
    const session = await EncryptedStorage.getItem(this.sessionStorageKey);
    return session !== null ? session.toString() : "";
  }
}
