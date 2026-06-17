function PopupList({ data }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <img
        src={data.profileImg}
        alt={data.userNm}
        style={{ width: 36, height: 36, borderRadius: "50%" }}
      />
      <div>
        <strong>{data.name}</strong>
        <span>
          {data.companyNm} · {data.positionNm}
        </span>
      </div>
    </div>
  );
}

export default PopupList;
