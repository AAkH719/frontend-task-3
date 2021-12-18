import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
						rel="stylesheet" />
					<link
						rel="preconnect"
						href="https://fonts.googleapis.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
						rel="stylesheet" />
					<link
						href="https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap"
						rel="stylesheet" />
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap"
						rel="stylesheet" />
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
						rel="stylesheet" />
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap"
						rel="stylesheet" />
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
						rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument