import Link from 'next/link'

const Header = () => (
  <div className="header">
    <div className="line"></div>
    <div className="logo-wrapper">
      <h3 className="logo-text left">INDIE'S</h3>
      <div className="logo-img">
        <img width="84" height="84" src="/images/logo.png" />
      </div>
      <div className="logo-text right">BLOG</div>
    </div>
    {/* <div className="menu-wrapper">
      <ul>
        <li>
          <Link href="/">
            <a>Anasayfa</a>
          </Link>
        </li>
        <li>
          <Link href="/tags/[slug]" as="/tags/unity">
            <a>Unity</a>
          </Link>
        </li>
        <li>
          <Link href="/tags/[slug]" as="/tags/kodlama">
            <a>Kodlama</a>
          </Link>
        </li>
        <li>
          <Link href="/tags/[slug]" as="/tags/modelleme">
            <a>Modelleme</a>
          </Link>
        </li>
        <li>
          <Link href="/tags/[slug]" as="/tags/kaplama">
            <a>Kaplama</a>
          </Link>
        </li>
        <li>
          <Link href="/iletisim" as="/iletisim">
            <a>Bize Ulaşın</a>
          </Link>
        </li>
      </ul>
    </div> */}
  </div>
)

export default Header
