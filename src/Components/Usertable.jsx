import PropTypes from 'prop-types';

const UsersTable = ({ users }) => {
  return (
    <div className="overflow-x-auto"> {/* Allow horizontal scrolling on small screens */}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th scope="col" className="border border-gray-300 px-4 py-2 text-left">ID</th>
            <th scope="col" className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th scope="col" className="border border-gray-300 px-4 py-2 text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100"> {/* Add hover effect */}
                <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="border border-gray-300 px-4 py-2 text-center text-gray-500">
                No users available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// Prop types validation
UsersTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UsersTable;
