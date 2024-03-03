import './../styles/header.css'

export default function Header(){
    return(
        <header>
            <div className="logo">cv builder</div>
            <button className="downloadBtn">download</button>
            <button className="shareBtn">share</button>
        </header>
    )
}