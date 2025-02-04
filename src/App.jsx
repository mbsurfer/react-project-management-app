function App() {
    return (
        <>
            <div className="h-full w-full flex flex-row flex-grow overflow-hidden">
                <div className="w-80 p-4 bg-gray-200">
                    <div className="sticky top-0 p-4 w-full">
                        <section className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-semibold">
                                Your Projects
                            </h2>
                            <button
                                className="text-sm cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-1 rounded">+
                            </button>
                        </section>

                        <ul className="flex flex-col overflow-hidden content-center justify-between">
                            <li>
                                <a href="#" className="block p-4 hover:underline">Project 1</a>
                            </li>
                            <li>
                                <a href="#" className="block p-4 hover:underline">Project 2</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <main role="main" className="h-full flex-grow p-4 pr-12 overflow-auto">
                    <section className="pt-4">
                        <h1 className="text-2xl font-bold mb-2">Learning React</h1>
                        <p className="text-stone-400 mb-4">Dec 29, 2024</p>
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    </section>
                    <hr className="text-stone-400"/>
                    <section className="mt-4">
                        <h2 className="text-xl font-bold">Tasks</h2>
                        <form className="flex flex-row gap-4 items-center border-b border-gray-200 py-4">
                            <div className="flex-grow-1">
                                <input type="text" placeholder="Create a task"
                                       className="w-full p-2 border border-gray-200"/>
                            </div>
                            <button type="submit"
                                    className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add
                                Task
                            </button>
                        </form>
                        <ul>
                            <li className="flex flex-row items-center border-b border-gray-200 p-4">
                                <span className="flex-grow-1">Task 1</span>
                                <button
                                    className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-xs text-white font-bold py-2 px-4 rounded">Complete
                                    Task
                                </button>
                            </li>
                        </ul>
                    </section>

                </main>
            </div>
        </>
    );
}

export default App;
