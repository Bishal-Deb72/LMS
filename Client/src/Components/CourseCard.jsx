import { useNavigate } from "react-router-dom";

function CourseCard({ data }) {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate("/course/description/", { state: { ...data } })}
            className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
            <img
                className="h-48 w-full object-cover"
                src={data?.thumbnail?.secure_url}
                alt="course thumbnail"
            />
            <div className="p-4 text-white">
                <h2 className="text-lg font-semibold text-yellow-400 truncate">{data?.title}</h2>
                <p className="text-gray-300 text-sm line-clamp-2">{data?.description}</p>

                <div className="mt-3">
                    <p className="text-sm">
                        <span className="font-semibold text-yellow-400">Category: </span>
                        {data?.category}
                    </p>
                    <p className="text-sm">
                        <span className="font-semibold text-yellow-400">Lectures: </span>
                        {data?.numberoflectures}
                    </p>
                    <p className="text-sm">
                        <span className="font-semibold text-yellow-400">Instructor: </span>
                        {data?.createdBy}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;
