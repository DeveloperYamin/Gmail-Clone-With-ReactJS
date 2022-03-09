import {
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import "../styles/EmailRow.css";

function EmailRow({ id, title, description, subject, time }) {
  return (
    <section className="emailRow">
      <div className="emailRow_options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h3 className="emailRow_title">{title}</h3>
      <div className="emailRow_message">
        <h4>
          {subject}{" "}
          <span className="emailRow_description"> - {description}</span>
        </h4>
      </div>
      <p className="emailRow_time">{time}</p>
    </section>
  );
}

export default EmailRow;
