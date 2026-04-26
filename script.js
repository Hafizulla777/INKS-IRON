// Data
        const artists = [
            {name: "Victor Vile", phone: "+91 98765 43210", specialty: "Geometric", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80"},
            {name: "Sarah Ink", phone: "+91 91234 56789", specialty: "Botanical", img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80"},
            {name: "Marcus Thorne", phone: "+91 90000 11122", specialty: "Irezumi", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80"}
        ];

        const bookings = [{client: "Hafiz Shaik", artist: "Victor Vile", status: "Confirmed"}];

        // Toggle Sidebar
        const mobileBtn = document.getElementById('mobileMenuBtn');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');

        const toggleMenu = () => {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        };

        mobileBtn.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
        sidebar.querySelectorAll('a').forEach(link => link.addEventListener('click', toggleMenu));

        // Render
        const render = () => {
            document.getElementById('artistBox').innerHTML = artists.map(a => `
                <div class="artist-card">
                    <div class="artist-img"><img src="${a.img}"></div>
                    <h3 style="color:var(--accent)">${a.name}</h3>
                    <p>${a.specialty}</p>
                    <p style="font-size:12px; margin-top:10px">${a.phone}</p>
                </div>
            `).join('');

            document.getElementById('aSelect').innerHTML = artists.map(a => `<option>${a.name}</option>`).join('');
            
            document.getElementById('adminTable').innerHTML = bookings.map(b => `
                <tr><td>${b.client}</td><td>${b.artist}</td><td><span style="color:var(--accent)">${b.status}</span></td></tr>
            `).join('');
        };

        document.getElementById('bookingForm').addEventListener('submit', (e) => {
            e.preventDefault();
            bookings.push({client: document.getElementById('cName').value, artist: document.getElementById('aSelect').value, status: "Pending"});
            render();
            alert("Sent!");
            e.target.reset();
        });

        render();