import React from "react";
import styles from "./Tags.module.css";

import PropTypes from "prop-types";

export default function Tags({ tags }) {
	return (
		<div className={styles.tags}>
			{tags.map((tag) => (
				<div className={styles.tag}>{tag}</div>
			))}
		</div>
	);
}

Tags.propTypes = {
	tags: PropTypes.arrayOf(PropTypes.string),
};

Tags.defaultProps = {};
