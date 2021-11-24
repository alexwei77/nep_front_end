export const DetailsTable = ({ details }) => {
  return (
    <div className='flex flex-col mt-4 mb-4'>
      <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='sm:rounded-lg'>
            <table className='min-w-full text-xs'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider'
                  >
                    KEY
                  </th>
                  <th
                    scope='col'
                    className='px-4 py-2 text-right font-medium text-gray-500 uppercase tracking-wider'
                  >
                    VALUE
                  </th>
                </tr>
              </thead>
              <div className='divide-y divide-gray-700'></div>
              <tbody className='divide-y divide-gray-700 text-xs xl:text-sm'>
                <tr></tr>
                {details.map((field, idx) => (
                  <tr key={idx}>
                    <td className='px-4 py-2 whitespace-nowrap'>
                      <div className='flex items-center'>
                        <div className='font-medium text-gray-400'>
                          {field.label}
                        </div>
                      </div>
                    </td>
                    <td className='px-4 py-2 whitespace-nowrap text-right'>
                      <div className='text-gray-300'>{field.value}</div>
                    </td>
                  </tr>
                ))}
                <tr></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
