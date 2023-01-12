import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleNotch,
  faCircleXmark,
  faMagnifyingGlass,
  faSearch,
  faSpider,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import images from "~/assets/images";

const cx = classNames.bind(styles);

console.log(images);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* logo */}
        <div className={cx("logo")}>
          <img src={images.logo} alt="tiktok" />
        </div>

        {/* Search */}
        <div className={cx("search")}>
          <input
            className={cx("input")}
            placeholder="Search account and videos"
            spellCheck="false"
          />
          <button className={cx("clear-btn")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          {/* loading */}
          {/* <button className={cx("loading")}>
            <FontAwesomeIcon icon={faCircleNotch} rotation={90} />
          </button> */}

          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        {/* Actions */}
        <div className={cx("actions")}>
          {/* <button className={cx("upload")}></button> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
