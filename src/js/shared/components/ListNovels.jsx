import React from "react";
import NovelCard from "./NovelCard.jsx";

const ListNovels = (props) => {
return(
    <div>
        <NovelCard
        novels={props.novels}
        handlenovelclick={props.handlenovelclick}as={props.as}
        type={props.type}
        value={props.value}
        variant={props.variant}
        className={props.classes}
        size={props.size}
      />
    </div>
);
};
export default ListNovels;