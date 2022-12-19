import ContentLoader from 'react-content-loader';

const SkeletonBlock: React.FC = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={488}
    viewBox="0 0 280 488"
    backgroundColor="#ebebeb"
    foregroundColor="#f3f3f3"
  >
    <circle cx="140" cy="140" r="126" />
    <rect x="0" y="286" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="333" rx="20" ry="20" width="280" height="43" />
    <rect x="0" y="380" rx="20" ry="20" width="280" height="43" />
    <rect x="127" y="443" rx="20" ry="20" width="153" height="45" />
    <rect x="0" y="452" rx="10" ry="10" width="91" height="27" />
  </ContentLoader>
);

export default SkeletonBlock;
