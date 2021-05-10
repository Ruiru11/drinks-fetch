import '../View/style.css';

const DetailView = ({ data, ingredients }) => (
    <>
    <div className="parent-container">
        <div className="left-container">
            <div className="left-content">
                <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            </div>

        </div>
        <div className="right-container">
            <div className="right-content">
                <ol>
                    <li>New item</li>
                </ol>
            </div>
        </div>

    </div>
    </>
);
export default DetailView;
