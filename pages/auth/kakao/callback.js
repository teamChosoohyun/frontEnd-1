import {useRecoilState, useSetRecoilState} from "recoil";
import {kakaoUserInfo, userState} from "../../../util/user";
import {useEffect} from "react";
import queryString from "query-string";
import {instance} from "../../../util/axiosSetting";


export default function Callback() {

      const [user, setUser] = useRecoilState(kakaoUserInfo);

      const isSignUpUser = (code) => {
          instance.post(`/user/kakaoLogin?k_id=${code}`)
              .then((res)=>{
                  if(res.data === "guest") window.location.href = "/auth/signup"
                  else window.location.href = "/"
              })
              .catch((error)=>{
                  console.log(error)
              })
      }


      const getKakaoUserInfo = (code) => {
          instance.get(`/user/getKakaoUserInfo?code=${code}`)
              .then((res)=>{
                setUser({
                    name: "",
                    type: 0,
                    k_id: res.data.k_id,
                    k_img_url: res.data.k_img_url,
                  });
                  isSignUpUser(res.data.k_id);
              })
              .catch((error)=>{
                  console.log(error)
              })
      };

      useEffect(() => {
          const query = queryString.parse(window.location.search);
          getKakaoUserInfo(query.code);
      }, [])

    return(
        <></>
    )
};
