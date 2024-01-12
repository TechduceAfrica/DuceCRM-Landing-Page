import style from './PriBtn.module.css'
export default function PriBtn({ btnLink, btnText }) {
    return (
        <a 
            href={btnLink} 
            title={btnText}
            className={style.pri__btn}
        >
            {btnText}
        </a>
    )
}
