type Deadline = {
    name: string,
    module: "CS2001" | "CS2002" | "CS2003" | "CS2004" | "CS2005",
    dueDates: Date[],
    weight: "Formative" | `${number}%` | null
}


export const DeadlinesTable: React.FC = () => {
    const deadlines: Deadline[] = [{
        name: 'Project Pitch',
        module: 'CS2001',
        dueDates: [new Date('2022-10-21')],
        weight: 'Formative'
    }, {
        name: 'Backlog and sprint plan',
        module: 'CS2001',
        dueDates: [new Date('2022-11-11')],
        weight: 'Formative'
    }, {
        name: 'Coursework',
        module: 'CS2005',
        dueDates: [new Date('2022-12-06')],
        weight: '25%',
    }, {
        name: 'Portfolio Draft',
        module: 'CS2001',
        dueDates: [new Date('2022-12-08')],
        weight: 'Formative'
    }, {
        name: 'Project Progress',
        module: 'CS2001',
        dueDates: [new Date('2023-01-13'), new Date('2023-02-10'), new Date('2023-03-24')],
        weight: 'Formative'
    }, {
        name: 'Coursework',
        module: 'CS2002',
        dueDates: [new Date('2023-01-20')],
        weight: '50%'
    }, {
        name: 'Coursework (CR)',
        module: 'CS2004',
        dueDates: [new Date('2023-02-10')],
        weight: '18%'
    }, {
        name: 'Individual Project',
        module: 'CS2001',
        dueDates: [new Date('2023-03-31')],
        weight: '100%'
    }, {
        name: "Summer Exam",
        dueDates: [new Date('2023-05-01')],
        module: "CS2002",
        weight: "50%"
    }, {
        name: "Summer Exam",
        dueDates: [new Date('2023-05-01')],
        module: "CS2003",
        weight: "100%"
    }, {
        name: "Summer Exam (CR)",
        dueDates: [new Date('2023-05-01')],
        module: "CS2004",
        weight: "42%"
    }, {
        name: "Summer Exam (Written)",
        dueDates: [new Date('2023-05-01')],
        module: "CS2004",
        weight: "40%"
    }, {
        name: "Summer Exam",
        dueDates: [new Date('2023-05-01')],
        module: "CS2005",
        weight: "75%"
    }]

    return (
        <table className="w-full">
            <thead>
                <tr>
                    <Th>Name</Th>
                    <Th>Module</Th>
                    <Th>Due Date</Th>
                    <Th>Weight</Th>
                </tr>
            </thead>
            <tbody>
                {
                    deadlines
                        .map(item => item.dueDates.map(date => ({ ...item, dueDates: [date] })))
                        .flat()
                        .sort((a, b) => a.dueDates[0].getTime() - b.dueDates[0].getTime())
                        .map((deadline, index) => {
                            // FIXME: add deadline hours
                            const due = deadline.dueDates[0]
                            const isPast = due.getTime() < Date.now()

                            return (
                                <tr
                                    key={index}
                                    className="even:bg-gray-100 even:dark:bg-gray-600/20"
                                >
                                    <Td>{deadline.name}</Td>
                                    <Td>{deadline.module}</Td>
                                    <Td>
                                        {
                                            new Intl.DateTimeFormat('en-GB', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric',
                                                // hour: 'numeric',
                                                // minute: 'numeric',
                                            }).format(due)
                                        }
                                    </Td>
                                    <Td>{deadline.weight}</Td>
                                    <Td>
                                        <input type="checkbox" checked={isPast} />
                                    </Td>
                                </tr>
                            )
                        })
                }

            </tbody>
        </table>
    )
}

const Th: React.FC<React.HTMLAttributes<HTMLTableCellElement>> = ({ children, ...props }) => {
    return (
        <th className="px-4 py-2 text-left">
            {children}
        </th>
    )
}

const Td: React.FC<React.HTMLAttributes<HTMLTableCellElement>> = ({ children, ...props }) => {
    return (
        <td className="px-4 py-2 first:rounded-l-md last:rounded-r-md">
            {children}
        </td>
    )
}