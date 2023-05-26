import Head from "next/head";
import React, { FC, ReactNode, useEffect, useState } from "react";
import scss from "./Layout.module.scss";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import { useIntl } from "react-intl";
import useScript_V2 from "@/components/layout/useScript_V2";

import { Montserrat } from "next/font/google";

const font = Montserrat({ subsets: ["latin"] });

interface LayoutProps {
	children: ReactNode;
	dir?: any;
	url?: any;
}

export interface IsOpenProps {
	isOpen: boolean;
	setIsOpen: (param: boolean) => void;
	isOpenDropdown: boolean;
	setIsOpenDropdown: (param: boolean) => void;
	isOpenDropdownLanguage: boolean;
	setIsOpenDropdownLanguage: (param: boolean) => void;
}

const Layout: FC<LayoutProps> = ({ children, dir, url }) => {
	useScript_V2(url);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
	const [isOpenDropdownLanguage, setIsOpenDropdownLanguage] =
		useState<boolean>(false);

	const props: any = {
		isOpen,
		setIsOpen,
		isOpenDropdown,
		setIsOpenDropdown,
		isOpenDropdownLanguage,
		setIsOpenDropdownLanguage
	};

	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1600);
	});

	const [isCanvasVisible, setIsCanvasVisible] = useState<boolean>(true);
	useEffect(() => {
		const updateCanvasVisibility = () => {
			setIsCanvasVisible(window.innerWidth > 500);
		};

		updateCanvasVisibility(); // проверка при первоначальной загрузке

		window.addEventListener("resize", updateCanvasVisibility);

		// Удалите обработчик при размонтировании компонента
		return () => window.removeEventListener("resize", updateCanvasVisibility);
	}, []); // Пустой массив в качестве зависимости, чтобы обработчик устанавливался только при монтировании компонента

	const intl: any = useIntl();
	const title: any = intl.formatMessage({ id: "page.head.home.title" });
	const description: any = intl.formatMessage({
		id: "page.head.meta.description"
	});
	const keywords: any = intl.formatMessage({
		id: "page.head.meta.keywords"
	});

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<meta name="robots" content="index, follow" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/code-icon.png" />
				<link rel="icon" href="/code-icon.png" hrefLang="x-default" />
				<link rel="icon" href="/code-icon.png" hrefLang="en" />
				<link rel="icon" href="/code-icon.png" hrefLang="ru" />
			</Head>
			{loading ? (
				<div>Loading...</div>
			) : (
				<div dir={dir}>
					{isCanvasVisible && <canvas className={scss.canvas} id="canvas" />}
					<div className={`${scss.layout} ${font.className}`}>
						<header>
							<Header {...props} />
						</header>
						<main>{children}</main>
						<footer>
							<Footer />
						</footer>
					</div>
				</div>
			)}
		</>
	);
};
export default Layout;
