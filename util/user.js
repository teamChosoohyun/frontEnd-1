import {atom} from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const kakaoUserInfo = atom({
    key: 'kakaoUserInfo',
    default: {
        name: "",
        type: 0,
        k_id: "",
        k_img_url: "",
    },
    effects_UNSTABLE: [persistAtom],
})