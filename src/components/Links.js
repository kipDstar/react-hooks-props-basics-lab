import React from "react";
import links from "../data/user";
console.log(links.links.github);
//console.log(links.links.linkedin);

function Links() {
    function renderLinks() {
        return (
            <div>
                <a href={links.links.github}>{links.links.github}</a>
                <a href={links.links.linkedin}>{links.links.linkedin}</a>
            </div>
        )
    }
    return (
        <div>
            <h3>Links</h3>
            {renderLinks()}
        </div>
    );
}

export default Links;