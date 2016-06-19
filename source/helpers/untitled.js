export () => (preferences) => {
	const newprefs = Object.assign({}, this.props.preferences)
  newprefs.updated = false
  return newprefs
}