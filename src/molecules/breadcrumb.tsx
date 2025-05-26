import Link from "../design-system/link";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb">
      <Link color="black" href="#">
        Provisioning
      </Link>
      <span className="breadcrumb-divider">/</span>
      <Link color="black" href="#">
        Relational Databases
      </Link>
      <span className="breadcrumb-divider">/</span>
      <Link color="black" href="#">
        Oracle Server
      </Link>
      <style jsx>
        {`
          .breadcrumb {
            display: flex;
            align-items: center;
            gap: 6px;
          }
          .breadcrumb-divider {
            color: var(--colors-text-subtlest);
            font-feature-settings: "liga" off, "clig" off;
            font-family: Lato;
            font-size: 12px;
            font-style: normal;
            font-weight: 600;
            line-height: 16px;
          }
        `}
      </style>
    </div>
  );
};

export default Breadcrumb;
