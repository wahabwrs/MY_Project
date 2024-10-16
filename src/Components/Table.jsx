import PropTypes from 'prop-types';

const Table = ({ data, type }) => {
  return (
    <div className="overflow-x-auto mr-0 border rounded-lg shadow bg-grey">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {type === 'posts' && (
              <>
                <th scope="col" className="px-4 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" className="px-4 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Body
                </th>
              </>
            )}
            {type === 'users' && (
              <>
                <th scope="col" className="px-4 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-4 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
              </>
            )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.length > 0 ? (
            data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100 m-12 transition-colors">
                {type === 'posts' && (
                  <>
                    <td className="px-8 py-2 text-sm whitespace-nowrap">{item.title}</td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">{item.body}</td>
                  </>
                )}
                {type === 'users' && (
                  <>
                    <td className="px-8 py-2 text-sm whitespace-nowrap">{item.name}</td>
                    <td className="px-6 py-4 text-sm whitespace-nowrap">{item.email}</td>
                  </>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={type === 'posts' ? 2 : 2} className="px-6 py-4 text-sm text-center text-gray-500">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// Prop types validation
Table.propTypes = {
  data: PropTypes.array.isRequired,
  type: PropTypes.oneOf(['posts', 'users']).isRequired,
};

export default Table;
