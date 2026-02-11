import React from 'react';

export function Features({user}) {
    return (
        <main>
            <h2 className="text-center">Feature Suggestions for {user}</h2>

            <br />
            
            <div className="alert alert-primary px-3 py-2">
                <h3>Feature Suggestion Title</h3>
                <p className="text-secondary">Author</p>
                <p>Feature suggestion description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut justo nisl. Sed aliquet tellus mi, sit amet aliquet diam suscipit tincidunt. Proin mollis feugiat libero ut dapibus. Aliquam erat volutpat. Maecenas a arcu vitae ipsum tristique condimentum quis id purus. Praesent lobortis odio in sem feugiat tempus sit amet id tortor. Praesent at dignissim justo, quis aliquet nulla. Etiam lobortis augue vitae sem gravida, vestibulum euismod eros suscipit. Vestibulum pretium odio quis erat convallis, in ullamcorper sapien mattis. Nunc efficitur ipsum nulla.</p>

                <p>Integer est risus, iaculis id feugiat non, efficitur sit amet ipsum. Vestibulum sodales magna ipsum, nec sollicitudin elit mattis vel. Pellentesque hendrerit nec sem nec porta. Fusce pellentesque dui ex, ut faucibus orci sagittis congue. Nulla facilisi. Curabitur nisi nulla, pharetra non elit sit amet, molestie aliquam sem. Donec fermentum elementum enim. Suspendisse a molestie lorem, eu fermentum sapien. Pellentesque tincidunt est sapien, eget tristique felis condimentum et. Maecenas sit amet luctus ipsum. Vestibulum et tortor quis odio ultrices ornare vel vel libero. Phasellus iaculis lacus turpis, ut feugiat metus porta at.</p>
                <p className="text-center text-secondary">(votes for this feature suggestion)</p>
            </div>
            
            <br />

            <div className="alert alert-primary px-3 py-2">
                <h3>Feature Suggestion Title 2</h3>
                <p className="text-secondary">Author</p>
                <p>Feature suggestion description - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut justo nisl. Sed aliquet tellus mi, sit amet aliquet diam suscipit tincidunt. Proin mollis feugiat libero ut dapibus. Aliquam erat volutpat. Maecenas a arcu vitae ipsum tristique condimentum quis id purus. Praesent lobortis odio in sem feugiat tempus sit amet id tortor. Praesent at dignissim justo, quis aliquet nulla. Etiam lobortis augue vitae sem gravida, vestibulum euismod eros suscipit. Vestibulum pretium odio quis erat convallis, in ullamcorper sapien mattis. Nunc efficitur ipsum nulla.</p>

                <p>Integer est risus, iaculis id feugiat non, efficitur sit amet ipsum. Vestibulum sodales magna ipsum, nec sollicitudin elit mattis vel. Pellentesque hendrerit nec sem nec porta. Fusce pellentesque dui ex, ut faucibus orci sagittis congue. Nulla facilisi. Curabitur nisi nulla, pharetra non elit sit amet, molestie aliquam sem. Donec fermentum elementum enim. Suspendisse a molestie lorem, eu fermentum sapien. Pellentesque tincidunt est sapien, eget tristique felis condimentum et. Maecenas sit amet luctus ipsum. Vestibulum et tortor quis odio ultrices ornare vel vel libero. Phasellus iaculis lacus turpis, ut feugiat metus porta at.</p>
                <p className="text-center text-secondary">(votes for this feature suggestion)</p>
            </div>
            
            <br />

            <form method="get" className="border px-3 py-3 ">
                <div className="mb-3">
                    <label className="form-label">Title:</label>
                    <input type="text" placeholder="type here..." className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description:</label>
                    <input type="text" placeholder="type here..." className="form-control py-5" />
                </div>
            </form>
        </main>
    );
}