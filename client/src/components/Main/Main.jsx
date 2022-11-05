import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
<>
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Welcome TO CodeSimplifer</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
		<div className="main">
			<h2>Welcome to home page Codesimplifer</h2>

		</div>
		</>
	);
};

export default Main;