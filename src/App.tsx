import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Example2 from './pages/Example2'
import Example1 from './pages/Example1'

function App() {
    return (
        <Router>
            <div className="flex flex-col sm:flex-row flex-grow">
                <div className="sm:w-1/4 md:1/4 flex-shrink flex-grow-0 p-4">
                    <div className="sticky top-0 p-4 bg-gray-100 rounded-xl">
                        <ul className="flex sm:flex-col overflow-hidden content-center justify-between">
                            <li className="py-2 hover:bg-indigo-300 rounded">
                                <a className="truncate" href="/">
                                    <img
                                        src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/clipboard.svg"
                                        className="w-7 sm:mx-2 mx-4 inline"
                                        alt="example2"
                                    />
                                    <span className="hidden sm:inline">
                                        Example 1
                                    </span>
                                </a>
                            </li>
                            <li className="py-2 hover:bg-indigo-300 rounded">
                                <a className="truncate" href="/example2">
                                    <img
                                        src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/clipboard.svg"
                                        className="w-7 sm:mx-2 mx-4 inline"
                                        alt="example2"
                                    />
                                    <span className="hidden sm:inline">
                                        Example 2
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <main role="main" className="flex-grow p-3">
                    <Routes>
                        <Route path="/" element={<Example1 />} />
                        <Route path="/example2" element={<Example2 />} />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App
