import { all } from "redux-saga/effects";
import displayGet from "../methods/saga";


export default function* productSagas(){
    yield all([...displayGet])
}