import React, { FC } from "react";
import scss from "@/components/pages/Style.module.scss";
import Image from "next/image";
import about_pic from "@/assets/about-pic.png";
import spiner_pic from "@/assets/spiner-pic.png";
import { FormattedMessage } from "react-intl";

const AboutPage: FC = () => {
	return (
		<>
			<div id="about" className={scss.about__page}>
				<div className="container">
					<div className={scss.content}>
						<div className={scss.left}>
							<Image
								priority={true}
								quality={25}
								loading="eager"
								className={`${scss.img}`}
								src={about_pic}
								alt={"labtop"}
							/>
							<span>
								<Image
									priority={true}
									quality={25}
									loading="eager"
									className={`${scss.icon}`}
									src={spiner_pic}
									alt={"icon"}
								/>
							</span>
						</div>
						<div className={scss.right}>
							<h4 className={`${scss.text__z__index}`}>
								<FormattedMessage id="page.about.title_1" />
							</h4>
							<h3 className={`${scss.text__z__index}`}>
								<FormattedMessage id="page.about.title_2" />
							</h3>
							<p className={`${scss.text__z__index}`}>
								<FormattedMessage id="page.about.text" />
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default AboutPage;
