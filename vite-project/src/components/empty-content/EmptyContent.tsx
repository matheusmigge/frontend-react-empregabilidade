import "./EmptyContent.css";
import computerImg from '../../assets/computer.svg';

interface EmptyContentProps {
    title: string;
    subtitle?: string;
}

function EmptyContent({ title, subtitle }: EmptyContentProps) {
    return (
        <div className="empty-content">
            <img src={computerImg} />
            <div className="text">
                <p>{title}</p>
                <p>{subtitle}</p>
            </div>
        </div>
    )
};

export default EmptyContent;