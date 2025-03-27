import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface BeachSearchProps {
    onSearch: (searchTerm: string) => void;
    onIslandFilter: (island: string) => void;
    islands: string[];
}

export default function BeachSearch({ onSearch, onIslandFilter, islands }: BeachSearchProps) {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <input
                        type="text"
                        placeholder="Buscar playa..."
                        className="w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            onSearch(e.target.value);
                        }}
                    />
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
                <div className="flex gap-2">
                    <button
                        type='button'
                        onClick={() => onIslandFilter('')}
                        className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
                    >
                        Todas
                    </button>
                    {islands.map((island) => (
                        <button
                            key={island}
                            onClick={() => onIslandFilter(island)}
                            className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
                        >
                            {island}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}