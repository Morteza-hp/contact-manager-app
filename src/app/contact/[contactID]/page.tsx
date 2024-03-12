// export async function generateStaticParams() {
//   const contacts = await fetch(
//     "https://jsonplaceholder.typicode.com/users"
//   ).then((res) => res.json());

//   const contactIDArray = contacts.map((contact: any) => ({
//     contactID: String(contact.id),
//   }));
//   return contactIDArray;
// }
const Detail = ({ params }: { params: any }) => {
  return (
    <div>
      <h1>Detail</h1>
    </div>
  );
};
export default Detail;
