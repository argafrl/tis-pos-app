import data from "../data/database.json";

const Users = () => {
  return (
    <div id="last-users">
      <h1 class="font-bold py-4">Users List</h1>
      <div class="overflow-x-scroll">
        <table class="w-full whitespace-nowrap">
          <thead class="bg-primary text-white">
            <th class="text-left py-3 px-2 rounded-l-lg">Name</th>
            <th class="text-left py-3 px-2">Type</th>
          </thead>
          {data.Buyers.map((e) => {
            return (
              <tr class="border-b border-gray-700">
                <td class="py-3 px-2 font-bold">
                  <div class="inline-flex space-x-3 items-center">
                    <div class="avatar placeholder">
                      <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                        <span>{e.name.charAt(0)}</span>
                      </div>
                    </div>
                    <span>{e.name}</span>
                  </div>
                </td>
                <td class="py-3 px-2">{e.type}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Users;
