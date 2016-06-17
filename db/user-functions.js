const handleError = (error) => {
	if (error) {
		console.log('there was and error in user functions', error)
	} else return
}

export default (knex) => {
	const addUser = (user) =>{
		return knex('users')
			// .returning('passportId')	
			.insert(user)
			.catch(handleError)
	}

	const findUser = (user) => {
		return knex('users')
			.where('id', user.id)
			.select()
			.catch(handleError)
	}

	const editUser = (user, details) => {
		return knex('users')
			.where('id', user.id)
			.update(details)
			.catch(handleError)
	}


	return {addUser, findUser, editUser}
}
