import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    console.log(props)
    return (
        <header className={s.header}>
            <img src="https://yandex-images.clstorage.net/Y5c2hn155/557998J79NBo/K4LGwqhjaLGKgjTdYc-rwGyYdHwMhCkYCpgxvc-Bfkk_HMm6gIfue3G4IoZObwPpM-AHqtM0pyfM4SazqjGBbb_WAqappt2Vy-d0XVGfihW4qWW5rMH4vC9YtcgvRLsZma97nYKUec0TTzVxr9qGnBP0Bn93J3HWzxHjdr-UQbkoYXRzfmHq498RBO2zzmi3HttHW--wySpvG0Te31FOTejOOWyDp8kfsx8mkOw51g8StWLMd_ejAB5T0IRPleBqe5IGof0SGDJ9YeSdQBzYdGw7FGvvUYu47lsVzs3gX6zKr4qegHW6bCL-ZmHvybYNIzTR3FfU0zPuYgOkH6SwiVjg5PA-MzhhLsC3X3HtiRWsCLQI3ZCoyCw4Rh79U0xO2954jWI1CH4g_CawPvnGHSL2Em0GNuEh7eCSpv50E_oLwbeTLjEKwt3gN-yBvlh3nItECI5DSstda1WvX8NfXlgcSX7w9ioeIu4VEkzLt-3QptLtBCYyw2xzsVW8JIH62KOnoo2i-BIdcjfO0Q1aVA6pF9iM0Okaf5r1js1QzYwrPsmfEqeoroPuNNO_GkU9QPTSLUWEoBP_AJFUX6fSe2uhhqEPwwhjnTEm3sHs-Me_ePVJn0E4it3rV20cAMyd6c25XAKlSR4AnmUC3shk3PC1Er301qATXGHwdR1H09qYcYdT7mOaEJ4hZBySLajUDBklqn5jCursKnW_roE_XBpuOz0CN5ktUX_nEs85hBwBV2JOFFZgsZxTIWXd54AYeECmcs3g-OPcozesoi86Z-3ohwu9sRn4PurWTq3iXJwojhqvsfWqLqHvpaLMeIYNASUAzZc2wgLeskDXL1Vj6TjSVKC-Y4jTzBInzLKuysfsi0S5riFJqK9rZK9sIE68yW3LvLElGy7DDzZALHg2ncIGoo1mZLFAHeMRZq8nQXj7UXcivsD4MM1T1V1Rzwl2LmtX2Lyhu_jtGHXcM" alt=""/>
        <div>
            {
                props.isAuth ?
                    <div>
                        <div>
                            {props.login}
                        </div>
                        <button onClick={props.logout}>LogOut</button>
                    </div>
                    : <NavLink to={`login`}>Login</NavLink>
            }

        </div>
        </header>
    );
}

export default Header;