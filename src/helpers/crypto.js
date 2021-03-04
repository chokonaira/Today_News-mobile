import * as Crypto from "expo-crypto";

export function encypt(data) {
  return new Promise(function(resolve, reject) {
    const digest = Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, data)
    resolve(digest)
  })
}


