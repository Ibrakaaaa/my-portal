import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

function GuardianApp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { state, dispatch } = useAppContext();
  const [filter, setFilter] = useState("");
  const { articles, darkmode } = state;

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true);
        const res = await fetch(
          "https://content.guardianapis.com/search?api-key=92014cba-8a47-4a12-b0e8-fea5ff503114&page-size=50&show-fields=thumbnail"
        );
        const data = await res.json();
        console.log(data);

        if (data.response && data.response.results) {
          dispatch({
            type: "FETCH_SUCCESS",
            payload: [...articles, ...data.response.results],
          });
        }
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchNews();
  }, [dispatch]);

  if (loading) return <p>Daten werden geladen... bitte warten</p>;
  if (error) return <p>Ein Fehler ist aufgetreten! Etwas ist schiefgelaufen :(</p>;

  return (
    <div
      className={`container mx-auto px-4 py-6 ${
        darkmode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Filter-Dropdown */}
      <div className="mb-4 flex justify-between items-center">
        <div className="text-lg font-semibold">Nachrichten filtern</div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className={`px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 ${
            darkmode
              ? "bg-gray-800 text-white focus:ring-blue-500"
              : "bg-gray-200 text-black focus:ring-blue-500"
          }`}
        >
          <option value="">Alle</option>
          <option value="Australia news,UK news,US news,Politics">Welt</option>
          <option value="sport,football,Television & radio">Sport</option>
          <option value="technology,Opinion,Music,Society">Gesellschaft</option>
        </select>
      </div>

      {/* Artikel-Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles
          .filter((article) => {
            if (!filter) return true;
            const filterValues = filter.split(",").map((f) => f.toLowerCase());
            return filterValues.includes(article.sectionName.toLowerCase());
          })
          .map((article) => (
            <div
              className={`border rounded shadow-md p-4 ${
                darkmode ? "bg-gray-800" : "bg-white"
              }`}
              key={article.id}
            >
              <img
                src={article.fields?.thumbnail || "default-thumbnail.jpg"}
                alt="Artikelbild"
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-lg font-bold mt-2">{article.webTitle}</h2>
              <small className="text-gray-400">{article.webPublicationDate}</small>
              <p className="text-sm">{article.sectionName}</p>
              <a
                href={article.webUrl}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline mt-2"
              >
                Mehr lesen...
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}

export default GuardianApp;
