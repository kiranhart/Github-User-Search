import { useState, useEffect } from 'react';
import Search from '../components/Search'; 
import Stat from '../components/Stat'; 
import useFetch from '../hooks/useFetch';

const Home = () => {
    const [search, setSearch] = useState('');
    const [username, setUsername] = useState('kiranhart');
    const userData = useFetch(`https://api.github.com/users/${username}`);

    const formatDate = () => {
        const date = new Date(userData.created_at);
        return date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
    };

    useEffect(() => {
        console.log('fetching');
    }, [username]);

    return <div className="bg-[#141D2F] min-h-screen flex flex-col justify-center items-center p-5">
        <Search value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Github username..." onClick={() => {
            setUsername(search);
        }}/>

        <div className="bg-[#1E2A47] w-full max-w-lg rounded-xl mt-5 pt-10 pb-5 px-6 flex col-col relative overflow-auto">
            <div className="flex flex-col items-center text-center">
                <img className="rounded-full w-1/5 mb-4" src={userData && userData.avatar_url || 'https://avatars.githubusercontent.com/u/36168080?v=4'} alt="" />
                <div>
                    <div className="px-6 font-spaceMono">
                        <div>
                            <h1 className="text-xl font-semibold text-white">{userData && userData.name || 'kiran Hart'}</h1>
                            <p className="text-blue-500 -mt-1"><a href={userData && userData.html_url || 'https://github.com/kiranhart'}>@{userData && userData.login || 'kiranhart'}</a></p>
                        </div>
                        <p className="text-sm text-white mt-1">{userData && formatDate() || 'Feb 5th 2018'}</p>
                    </div>
                </div>
                <div className="w-full mt-4">
                    <div className="w-full bg-[#141D2F] rounded-xl text-white grid grid-cols-3 py-4">
                        <Stat name="Repos" value={userData && userData.public_repos || '123'} />
                        <Stat name="Followers" value={userData && userData.followers || '123'} />
                        <Stat name="Following" value={userData && userData.following || '123'} />
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Home;