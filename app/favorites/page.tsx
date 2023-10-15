import getCurrentUser from '@/actions/getCurrentUser';
import getFavoriteListings from '@/actions/getFavoriteListings';
import EmptyState from '@/components/EmptyState';
import FavoritesClient from './FavoritesClient';

const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No favorites found"
        subTitle="Looks like you not have favorite listings."
      />
    );
  }

  return <FavoritesClient listings={listings} currentUser={currentUser} />;
};

export default ListingPage;
