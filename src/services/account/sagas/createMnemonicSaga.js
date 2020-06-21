import { delay, put, select } from "redux-saga/effects"
import { ethers } from 'ethers';

export default function* createMnemonicSaga(
    action
) {
    console.log("CreateMnemonic Saga", action.data)
    let wallet = yield ethers.Wallet.createRandom();
    console.log(wallet)
    let randomMnemonic = wallet.mnemonic;
    let mnemonicArray = randomMnemonic.split(" ");
    console.log(wallet, randomMnemonic, mnemonicArray);

    const accountObj = {
        address: wallet.address,
        publicKey: wallet.signingKey.publicKey,
        privateKey: wallet.privateKey,
        mnemonic: mnemonicArray
    }

    yield put({ type: "SET_ACCOUNT", data: accountObj })
}