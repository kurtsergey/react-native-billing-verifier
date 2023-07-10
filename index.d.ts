declare module 'react-native-billing-verifier' {

  interface Transaction {
    receiptData: string;
    receiptSignature: string;
  }

  export default {
    verifyAndroidPurchase<T extends Transaction = Transaction>(transaction: T, publicKeyStr: string): Promise<T>
  };
}
