import { GetServerSideProps } from "next";
import Head from "next/head";

interface Repo {
  id: number,
  full_name: string,
  description: string
}

export default function Home({data}) {
  return (
    <div>
      <Head>
        <title>My Page With Next</title>
      </Head>
      <main>
        {data?.map((rep: Repo) => {
          return <div key={rep.id}>
            <h4>{rep.full_name}</h4>
            <p>{rep.description}</p>
          </div>;
        })}
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    `https://api.github.com/users/mateushenriquedasilva/repos`
  );
  const data: Array<object> = await res.json();

  return {
    props: {
      data,
    },
  };
};
