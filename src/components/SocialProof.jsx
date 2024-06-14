const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
  ]

export default function SocialProof() {
  return (
    <div>
    <div className="py-24 sm:py-32 md:mt-28 ">
      <div className="mx-auto max-w-screen px-6 lg:px-8 ">
        <dl className="grid sm:grid-cols-1 md:text-xl md:grid-cols-2 md:space-x-12 gap-x-4 gap-y-6 text-center lg:grid-cols-2">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-6 ">
              <dt className="text-base leading-7 dark:text-white  text-gray-600 ">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-wide dark:text-white  text-gray-900 sm:text-5xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    </div>
  );
}
